document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.text-container');
    const textItems = [
        "สวัสดีครับ ผม ภีม อายุ 17",
        "discord : KOKO SHOP",
        "บริการรับทำเว็บไซต์ แก้ปัญหาต่างๆ"
    ];
    let index = 0;

    function changeText() {
        document.getElementById('text').textContent = textItems[index];
        index = (index + 1) % textItems.length;
    }

    changeText(); // เปลี่ยนข้อความแรกทันทีหลังจากโหลดหน้าเว็บ

    // เปลี่ยนข้อความทุก 3 วินาที
    setInterval(changeText, 3000);
});

// ----------------- จัดทำโดย TIRAWIT SUKKHAO หรือ KOKO SHOP--------------------- //