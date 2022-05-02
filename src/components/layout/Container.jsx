function Container({ children }) {
  return (
    <main className='flex justify-center pt-4 md:pt-10 lg:pt-14 xl:pt-16'>
      <div className='lg:w-4/5'>{children}</div>
    </main>
  );
}
export default Container;
