function Container({ children }) {
  return (
    <main className='bg-base-200 flex justify-center'>
      <div className='lg:w-4/5'>{children}</div>
    </main>
  );
}
export default Container;
