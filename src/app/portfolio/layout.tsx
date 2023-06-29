const Layout = ({ children }: { children: React.JSX.Element }) => {
   return (
      <div className=''>
         <h1 className='text-6xl mb-4'>Our Works</h1>
         {children}
      </div>
   );
};
export default Layout;
