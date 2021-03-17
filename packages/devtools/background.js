const pagePorts = {};
const panelPorts = {};
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "panel") {
    port.onMessage.addListener((message) => {
      if (!panelPorts[message.dest]) {
        panelPorts[message.dest] = port;
      }
      const pagePort = pagePorts[message.dest];
      pagePort && pagePort.postMessage(message);
    });

    port.onDisconnect.addListener(() => {
      Object.entries(panelPorts).forEach(([id, panelPort]) => {
        if (panelPort === port) {
          delete panelPorts[id];
        }
      });
    });
  } else if (port.name === "page") {
    pagePorts[port.sender.tab.id] = port;

    port.onMessage.addListener((message, sender) => {
      const panelPort = panelPorts[port.sender.tab.id];
      panelPort && panelPort.postMessage(message);
    });

    port.onDisconnect.addListener(() => {
      delete pagePorts[port.sender.tab.id];
    });
  }
});
