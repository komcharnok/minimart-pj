import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer footer-center  text-base-content rounded p-10 mt-12 bg-yellow-400 w-auto">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">นโยบายการใช้คุ๊กกี้</a>
          <a className="link link-hover">การตั้งค่าคุ๊กกี้</a>
          <a className="link link-hover">ข้อกำหนดและเงื่อนไข</a>
          <a className="link link-hover">เข้าร่วม M-minimart เป็นผู้ขาย</a>
        </nav>
        <aside>
          <p>ลิขสิทธิ์ © {new Date().getFullYear()} M-minimart สงวนลิขสิทธิ์.</p>
        </aside>
      </footer>
    </>

  )
}

export default Footer
