function removeAllPhoto() { //funtion ลบรูปเก่า หรือเคลียค่า
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = ''; //ทำให้ค่าข้างในเป็นว่าง
}

function addImg(keyword, index) {
    const img = document.createElement('img');
    img.src = `https://source.unsplash.com/400x225?${keyword}&sig=${index}`;

    const gallery = document.querySelector(".gallery");


    gallery.appendChild(img);
}

function searchPhoto(event) {
    const keyword = event.target.value;
    removeAllPhoto();
    if (event.key === 'Enter' && keyword)
        for (let i = 0; i < 3; i++) {
            addImg(keyword, i);
        }
}

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log(`--${this.name}:${this.value+suffix}`);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function main() {
    const inputContorls = document.querySelectorAll('.controls input');
    inputContorls.forEach((input) => { input.addEventListener('change', handleUpdate); });
    // inputContorls.forEach((input) => { input.addEventListener('mousemove', handleUpdate); });

    const inputElement = document.querySelector('.search');
    inputElement.addEventListener('keydown', searchPhoto);
}
main();