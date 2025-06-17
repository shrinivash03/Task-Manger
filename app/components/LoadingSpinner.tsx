export default function LoadingSpinner() {
  return (
    <div className="flex justify-center py-12">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-primary-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-8 h-8 border-4 border-transparent border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}