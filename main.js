/**
 * @Author: Your name
 * @Date:   2025-04-01 23:45:47
 * @Last Modified by:   Your name
 * @Last Modified time: 2025-04-01 23:48:57
 */
// Thay thế toàn bộ phần Google Maps script bằng:
const mapContainer = document.querySelector('.map-section');
if (mapContainer) {
    mapContainer.innerHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.123456789012!2d106.12345678901234!3d20.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiAxMDbCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
        </iframe>`;
}