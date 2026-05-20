const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 791 });
  await page.goto('http://localhost:5173/#journey', { waitUntil: 'networkidle2' });
  
  // wait a bit for animations
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // navigate to slide 4 (index 3)
  await page.evaluate(() => {
    const dots = document.querySelectorAll('.journey-dot');
    if(dots[3]) dots[3].click();
  });
  
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  await page.screenshot({ path: '/Users/roshnikumari/.gemini/antigravity/brain/89b0f4b4-c55e-4909-8d92-33adeba6eead/scratch/slide4.png' });
  
  // navigate to slide 1 (index 0) for comparison
  await page.evaluate(() => {
    const dots = document.querySelectorAll('.journey-dot');
    if(dots[0]) dots[0].click();
  });
  
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.screenshot({ path: '/Users/roshnikumari/.gemini/antigravity/brain/89b0f4b4-c55e-4909-8d92-33adeba6eead/scratch/slide1.png' });
  
  await browser.close();
})();
