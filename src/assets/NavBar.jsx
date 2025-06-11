import logo from '/EarnSellLogoNB.png'

const NavBar = () => {
  return (
    <section className="text-white ">
        <div className="flex justify-between border-b">
            <div className="p-7 w-1/3">
                <img src={logo} alt="logo" />
            </div>
            <div className="p-7">Hamburger Icon</div>
        </div>
    </section>
  )
}

export default NavBar