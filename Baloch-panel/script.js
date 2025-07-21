function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "Baloch" && pass === "Baloch098") {
        document.getElementById("loginPanel").classList.add("hidden");
        document.getElementById("mainPanel").classList.remove("hidden");
    } else {
        document.getElementById("loginError").style.display = 'block';
    }
}

function getRandomIP() {
    return `${rand(1, 255)}.${rand(0, 255)}.${rand(0, 255)}.${rand(1, 254)}`;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateDNS() {
    const country = document.getElementById("country").value;
    let host = "";
    if (country === "ae") host = "dxb-gaming-02.ae";
    if (country === "de1") host = "frankfurt-gaming-04.de";
    if (country === "fi") host = "munich-gaming-05.net";
    if (country === "de2") host = "gaming-de-01.frankfurt.net";
    if (country === "de3") host = "germany-gameserver-02.de";

    const dns = `${getRandomIP()} - هاست: ${host}`;
    document.getElementById("output").innerText = dns;
    prepareDownload(dns);
}

function generateWireguard() {
    const name = document.getElementById("configName").value || "Baloch";
    const ip = getRandomIP();
    const config = `# WireGuard Config\n[Interface]\nPrivateKey = (RandomKey)\nAddress = ${ip}/32\nDNS = ${ip}\n\n[Peer]\nPublicKey = (ServerKey)\nEndpoint = ${ip}:51820\nAllowedIPs = 0.0.0.0/0\n\n# Name: ${name}`;
    document.getElementById("output").innerText = config;
    prepareDownload(config);
}

function prepareDownload(content) {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.getElementById("downloadLink");
    link.href = URL.createObjectURL(blob);
    link.style.display = "block";
    link.innerText = "دانلود فایل کانفیگ";
}