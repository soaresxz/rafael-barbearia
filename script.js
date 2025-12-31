        lucide.createIcons();

        const btnMobile = document.getElementById('mobile-menu-btn');
        const menuMobile = document.getElementById('mobile-menu');

        if(btnMobile) {
            btnMobile.addEventListener('click', () => {
                menuMobile.classList.toggle('hidden');
            });
        }

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuMobile.classList.add('hidden');
            });
        });

        function filterGallery(category, clickedBtn) {
                document.querySelectorAll('.btn-filter').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                clickedBtn.classList.add('active');

                document.querySelectorAll('.gallery-item').forEach(item => {
                    if (category === 'todos' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }

            document.addEventListener("DOMContentLoaded", function() {
        

        const btnMobile = document.getElementById('mobile-menu-btn');
        const menuMobile = document.getElementById('mobile-menu');

        if (btnMobile && menuMobile) {

            btnMobile.addEventListener('click', () => {
                menuMobile.classList.toggle('hidden');
            });

            const mobileLinks = document.querySelectorAll('#mobile-menu a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuMobile.classList.add('hidden');
                });
            });
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        

        const videos = document.querySelectorAll("video");

        videos.forEach(video => {
            video.addEventListener("play", function() {

                videos.forEach(otherVideo => {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });
            });
        });

    });