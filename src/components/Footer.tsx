export default function Footer() {
  return (
    <footer className="bg-textPrimary text-white py-4 mt-auto absolute w-full bottom-0">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} ProgressApp. All rights reserved.
      </div>
    </footer>
  );
}
