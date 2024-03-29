function Header({ title }) {
  return (
    <header>
      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl pb-14 pt-7'>
        {title}
      </h1>
    </header>
  );
}
export default Header;
