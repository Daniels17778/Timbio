
        const imageUpload = document.getElementById('imageUpload');
        const frameImage = document.getElementById('frameImage');
        const framePlaceholder = document.querySelector('.frame-placeholder');

        imageUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    frameImage.src = event.target.result;
                    frameImage.style.display = 'block';
                    framePlaceholder.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });

        // También permitir click directo en el marco
        document.querySelector('.image-frame').addEventListener('click', function() {
            imageUpload.click();
        });


         function toggleCard(card) {
            if (card.classList.contains('expanded')) {
                card.classList.remove('expanded');
            } else {
                document.querySelectorAll('.card').forEach(function(c) {
                    c.classList.remove('expanded');
                });
                card.classList.add('expanded');
            }
        }
    