function imageGallery() {
    const highlight = document.querySelector('.gallery-hightlight');
    const previews = document.querySelectorAll('.portfolio-preview');

previews.forEach(preview => {
    preview.addEventListener('click', function() {
        // const.smallSrc = this.src;
        // const.bigSrc = small.src.replace('small', 'big');
        previews.forEach(preview => 
            preview.classList.remove('bg-gray-800', 'border-blue-500', 'text-white'));
        // highlight.src = bigSrc;
        preview.classList.add('bg-gray-800', 'border-blue-500', 'text-white')
    })
})    
}

imageGallery();