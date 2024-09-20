
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const openFullscreen = (elem) => {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
};

const closeFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
    }
};

const broadcastChannel = "internal_connection";
const broadcastId = Math.random().toString(36).substring(2);

const joinToBroadcast = (ctrl, fullscreen = false) => {
    if (fullscreen) {
        openFullscreen(document.documentElement);
    }
};

// Connection to a broadcast channel
const bc = new BroadcastChannel(broadcastChannel);

// A handler that only logs the event to the console:
bc.onmessage = (event) => {
    let data = JSON.parse(event.data);
    receiveMessageFromOtherTab(data);
};

const sendMessageToOtherTab = (obj) => {
    let data = null;
    if (typeof obj === "string" || obj instanceof String) {
        data = { msg: obj };
    } else {
        data = obj;
    }
    data = {
        from: broadcastId,
        data: data,
    };
    data = JSON.stringify(data);
    bc.postMessage(data);
    return data;
};