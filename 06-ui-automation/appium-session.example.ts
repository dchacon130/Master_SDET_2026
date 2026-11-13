const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
};

/**
 * adb devices:
 * List of devices attached   
 * QWX4UKPBSG85Z5U8        device
 *
 * 1. ADB ya ve el teléfono. Appium todavía no puede abrir una app porque no está instalado.
 * 2. Playwright creó la sesión con browser.newContext() en esta computadora. 
 * ¿Qué falta aquí para que Appium cree la suya?
 * Instalar Appium y conectarlo para que abra su primera aplicación.
 */