# Sử dụng BroadcastChannel Javascript để gửi thông tin đến tab trình duyệt khác

BroadcastChannel API là một API nền tảng web cho phép giao tiếp giữa các cửa sổ, tab, hoặc iframe khác nhau có cùng nguồn gốc (origin). Điều này có nghĩa là bạn có thể truyền thông tin giữa các phần khác nhau của trang web mà không cần phải sử dụng các phương pháp phức tạp như WebSockets hoặc LocalStorage.

Tác dụng và ứng dụng của BroadcastChannel API:
Đồng bộ hóa trạng thái: Bạn có thể sử dụng BroadcastChannel để đồng bộ hóa trạng thái giữa các tab.
Ví dụ, khi người dùng đăng nhập hoặc đăng xuất trên một tab, các tab khác cũng sẽ được cập nhật trạng thái tương ứng.

Giao tiếp giữa các phần của ứng dụng: API này giúp các phần khác nhau của ứng dụng web giao tiếp với nhau một cách dễ dàng và hiệu quả.

Cập nhật dữ liệu theo thời gian thực: Bạn có thể sử dụng BroadcastChannel để cập nhật dữ liệu theo thời gian thực giữa các tab mà không cần phải làm mới trang.

# Bài toán thực tế

Một doanh nghiệp xây dựng web site quản lý hệ thống bán hàng.
Nhân viên có thể tạo đơn hàng cho khách hàng.
Khách hàng có thể thực hiện thanh toán thông qua việc quét mã QRCode.

Vấn đề: để khách hàng có thể quét mã QRCode thì nhân viên sẽ cần phải in mã QRCode cho khách hàng.
Vấn đề này làm tăng chi phí hoạt động (cần đầu tư máy in chuyên dụng, tốn chi phí thay mực in, tốn chi phí giấy in).
Tác động xấu đến môi trường (do sử dụng mực in, giấy in).

Giải pháp:

Tại mỗi quầy sẽ lắp thêm 1 màn hình phụ, hướng về phía khách hàng.
Trong trường hợp bình thường thì màn hình này sẽ được tận dụng để hiển thị thông tin quảng cáo, thông tin khuyến mãi, giúp gia tăng sự hấp dẫn của các sản phẩm đến khách hàng.
Khi khách hàng thực hiện thanh toán, nhân viên sẽ thực hiện thao tác trên màn hình quản lý để gửi thông tin giao dịch đến màn hình phụ (để khách hàng kiểm tra đơn hàng cũng như quét mã QRCode).