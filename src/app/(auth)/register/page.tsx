export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border p-6 rounded-lg w-[400px]">
        <h1 className="text-2xl font-bold mb-4">
          Register
        </h1>

        <form className="space-y-4">
          <input
            placeholder="Name"
            className="w-full border p-2"
          />

          <input
            placeholder="Email"
            className="w-full border p-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2"
          />

          <button
            className="w-full bg-black text-white p-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}