const music = document.getElementById('bgMusic');
music.volume = 1.0; // Volume 50%

// Fungsi pindah halaman dan putar musik
function togglePage() {
    const p1 = document.getElementById('page1');
    const p2 = document.getElementById('page2');
    
    if (p1.classList.contains('active')) {
        p1.classList.remove('active');
        p2.classList.add('active');
        // Putar musik saat klik tombol pertama kali
        music.play().catch(e => console.log("Musik aktif setelah interaksi user."));
    } else {
        p2.classList.remove('active');
        p1.classList.add('active');
    }
}

// Fungsi simpan catatan
function saveNote() {
    const input = document.getElementById('noteInput');
    const list = document.getElementById('notesList');
    
    if(!input.value.trim()) {
        alert("Tulis pesan dulu ya... ✨");
        return;
    }

    const card = document.createElement('div');
    card.className = 'note-card';
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    card.innerHTML = `<p>${input.value}</p><small>💌 Terkirim pukul ${time}</small>`;
    
    list.insertBefore(card, list.firstChild);
    input.value = "";
    
    // Beri efek ledakan kupu-kupu saat simpan
    for(let i=0; i<5; i++) {
        setTimeout(createButterfly, i * 200);
    }
}

// Fungsi membuat kupu-kupu terbang
function createButterfly() {
    const container = document.getElementById('butterfly-container');
    const b = document.createElement('div');
    b.className = 'butterfly';
    b.innerHTML = '🦋';
    
    b.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 5 + 5;
    b.style.animationDuration = duration + 's';
    b.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    b.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(b);
    
    // Hapus dari DOM setelah terbang selesai agar ringan
    setTimeout(() => b.remove(), duration * 1000);
}

// Spawn kupu-kupu setiap 2 detik secara otomatis
setInterval(createButterfly, 2000);

// Efek klik muncul bunga 🌸
document.addEventListener('click', (e) => {
    const flower = document.createElement('span');
    flower.innerHTML = '🌸';
    flower.style.position = 'absolute';
    flower.style.left = e.pageX + 'px';
    flower.style.top = e.pageY + 'px';
    flower.style.fontSize = '1.5rem';
    flower.style.pointerEvents = 'none';
    flower.style.animation = 'fadeIn 1s forwards';
    document.body.appendChild(flower);
    
    setTimeout(() => flower.remove(), 1000);
});