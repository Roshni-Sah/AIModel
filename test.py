from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page(viewport={'width': 1200, 'height': 791})
    page.goto('http://localhost:5173/#journey')
    time.sleep(2)
    # Click on dot index 3 (Slide 4)
    page.evaluate("document.querySelectorAll('.journey-dot')[3].click()")
    time.sleep(1)
    page.screenshot(path='/Users/roshnikumari/.gemini/antigravity/brain/89b0f4b4-c55e-4909-8d92-33adeba6eead/scratch/slide4.png')
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
