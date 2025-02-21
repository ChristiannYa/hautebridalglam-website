function Footer() {
  return (
    <footer className="bg-neutral-300 bg-opacity-90 py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="mb-2">Email: info@bridalbeautyartistry.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="flex">
          <a href="#" aria-label="Instagram" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook" className="social-link">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Pinterest" className="social-link">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

