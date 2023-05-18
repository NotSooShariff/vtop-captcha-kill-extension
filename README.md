# CaptchaKill Chrome Extension

## Overview
CaptchaKill is a powerful Chrome extension designed to streamline the login process on our college's website. It leverages a minor vulnerability that was discovered, allowing users to bypass the image-based recaptcha and significantly reduce the time taken to log into their accounts. This extension, in conjunction with the VTOP Captcha Solver extension, creates a seamless and instant login experience.

## Vulnerability Details
The vulnerability was observed on our college's website, where the login process employed two types of captchas. The first one was an internal captcha developed by the college, while the second was an externally sourced recaptcha. It was noticed that upon reloading the page with the recaptcha, it would either switch to the text-based captcha or disappear altogether. This behavior led to the development of the CaptchaKill extension, utilizing this vulnerability to optimize the login process.

## Features
- Automatically bypasses the recaptcha on the college website login page
- Enables instant login and eliminates the need for manual image selection
- Works seamlessly with the VTOP Captcha Solver extension for a streamlined experience

## How to Use
1. Download the repository by clicking on the "Code" button and selecting "Download ZIP."
2. Extract the downloaded ZIP file to a convenient location on your computer.
3. Open the Google Chrome browser.
4. Type `chrome://extensions` in the address bar and press Enter.
5. Enable the "Developer mode" toggle switch located in the top-right corner of the page.
6. Click on the "Load unpacked" button and select the extracted folder containing the extension files.
7. The CaptchaKill extension will be added to your Chrome browser.
8. Visit the college website login page, and the extension will automatically bypass the recaptcha.

## Disclaimer
Please note that the CaptchaKill Chrome extension is provided for educational and research purposes only. It utilizes a vulnerability found on the college website to enhance the login process. This extension is free to download and use, and no malicious intent is associated with its development.

## Projects to use with 
- [VTOP Captcha Solver Chrome Extension](https://chrome.google.com/webstore/detail/vtop-captcha-solver/balpfhmdaaahhppiijcgaemeoeojejam) - Solves captchas on the VTOP website for a seamless experience.

## License
This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by Osh
