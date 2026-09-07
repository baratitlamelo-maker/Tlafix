function showMessage(category) {
    const solution = document.getElementById("solution");

    solution.style.display = "block";

    solution.innerHTML = `
        <h3>${category}</h3>
        <p>
            Tell TlaFix exactly what is going wrong with your
            ${category.toLowerCase()}.
        </p>
        <p>
            You can also describe any error message you see.
        </p>
    `;

    document.getElementById("problem").focus();
}


function solveProblem() {

    const problem = document
        .getElementById("problem")
        .value
        .toLowerCase()
        .trim();

    const solution = document.getElementById("solution");

    if (problem === "") {

        solution.style.display = "block";

        solution.innerHTML = `
            <h3>⚠️ TlaFix needs more information</h3>
            <p>
                Please describe the problem you are experiencing.
            </p>
        `;

        return;
    }


    solution.style.display = "block";


    /* INTERNET PROBLEM */

    if (
        problem.includes("no internet") ||
        problem.includes("internet not working") ||
        problem.includes("internet") &&
        problem.includes("not working")
    ) {

        solution.innerHTML = `
            <h3>🌐 Internet Connection Problem</h3>

            <p><strong>Try these steps:</strong></p>

            <ol>
                <li>Check that your Ethernet cable or Wi-Fi is connected.</li>
                <li>Restart your router or network device.</li>
                <li>Open Command Prompt.</li>
                <li>Run <code>ipconfig</code>.</li>
                <li>Check whether your computer has an IP address.</li>
                <li>Try <code>ping 8.8.8.8</code>.</li>
            </ol>

            <p>
                If the problem continues, check your DHCP and DNS settings.
            </p>
        `;

        return;
    }


    /* PRINTER PROBLEM */

    if (
        problem.includes("printer") ||
        problem.includes("printing") ||
        problem.includes("print")
    ) {

        solution.innerHTML = `
            <h3>🖨️ Printer Troubleshooting</h3>

            <p><strong>Try these steps:</strong></p>

            <ol>
                <li>Make sure the printer is powered on.</li>
                <li>Check the USB or network connection.</li>
                <li>Check whether the printer shows as Offline.</li>
                <li>Restart the printer.</li>
                <li>Restart your computer.</li>
                <li>Check the printer queue for stuck documents.</li>
                <li>Try printing a test page.</li>
            </ol>
        `;

        return;
    }


    /* WIFI PROBLEM */

    if (
        problem.includes("wifi") ||
        problem.includes("wi-fi")
    ) {

        solution.innerHTML = `
            <h3>📶 Wi-Fi Troubleshooting</h3>

            <p><strong>Try these steps:</strong></p>

            <ol>
                <li>Make sure Wi-Fi is turned on.</li>
                <li>Disconnect and reconnect to the Wi-Fi network.</li>
                <li>Restart the router.</li>
                <li>Restart your computer.</li>
                <li>Run <code>ipconfig</code>.</li>
                <li>Try <code>ipconfig /release</code>.</li>
                <li>Try <code>ipconfig /renew</code>.</li>
            </ol>
        `;

        return;
    }


    /* COMPUTER PROBLEM */

    if (
        problem.includes("computer") ||
        problem.includes("pc") ||
        problem.includes("laptop") ||
        problem.includes("windows")
    ) {

        solution.innerHTML = `
            <h3>🖥️ Computer Troubleshooting</h3>

            <p><strong>Start with these checks:</strong></p>

            <ol>
                <li>Restart the computer.</li>
                <li>Check for Windows updates.</li>
                <li>Check available storage space.</li>
                <li>Open Task Manager and check CPU and memory usage.</li>
                <li>Check whether any error messages appear.</li>
            </ol>

            <p>
                If you can provide the exact error message,
                TlaFix can narrow down the problem.
            </p>
        `;

        return;
    }


    /* UNKNOWN PROBLEM */

    solution.innerHTML = `
        <h3>🔎 Let's investigate</h3>

        <p>
            TlaFix doesn't have a specific solution for that problem yet.
        </p>

        <p>
            Try describing the problem in more detail, including:
        </p>

        <ul>
            <li>What device you are using</li>
            <li>What you were trying to do</li>
            <li>What happened</li>
            <li>Any error message you received</li>
        </ul>

        <p>
            <strong>Example:</strong>
            "My Windows 10 computer connects to Wi-Fi but says
            No Internet."
        </p>
    `;
}
