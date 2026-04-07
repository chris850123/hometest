const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonText();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
    
    updateButtonText();
});

function updateButtonText() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '라이트 모드';
    } else {
        themeToggle.textContent = '다크 모드';
    }
}

// Naver Maps Initialization
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');
    if (mapContainer && typeof naver !== 'undefined') {
        const position = new naver.maps.LatLng(37.4102, 127.1295);
        
        const mapOptions = {
            center: position,
            zoom: 17
        };

        const map = new naver.maps.Map('map', mapOptions);

        const marker = new naver.maps.Marker({
            position: position,
            map: map,
            title: '월드공인중개사'
        });

        const infowindow = new naver.maps.InfoWindow({
            content: '<div style="padding:10px; min-width:150px; line-height:150%; color: #333;"><h4 style="margin-top:0;">월드공인중개사</h4>경기 성남시 분당구 야탑동 381-14</div>'
        });

        naver.maps.Event.addListener(marker, "click", function(e) {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
        });

        // Open InfoWindow by default
        infowindow.open(map, marker);
    }
});
