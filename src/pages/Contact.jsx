import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError("Please fill in all fields!");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: "Message received successfully!",
          });
        }, 2000);
      });

      if (!result.success) {
        throw new Error(result.message);
      }

      setSuccessMsg(result.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Something went wrong!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-[80vh] p-6">
      <div className="mx-auto px-6 py-3 max-w-7xl animate-fade-up mb-3">
        <p className="uppercase text-neutral-400 mb-3 text-sm ">
          noir creative studio / contact
        </p>
        <h1 className="text-white text-4xl lg:text-7xl mb-3 uppercase">
          let's create <span className="text-red-900">something.</span>
        </h1>
        <p className="text-neutral-300 mb-3">
          Have a story worth telling? We'd love to hear about it.
        </p>
      </div>
      <div className="bg-neutral-800 rounded-2xl mx-auto max-w-7xl p-6">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
          {" "}
          <label className="uppercase text-neutral-400" htmlFor="name">
            Your Name
          </label>{" "}
          <input
            value={name}
            className="border border-neutral-400 p-3 rounded-2xl focus:outline-none focus:border-red-800"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
              setSuccessMsg("");
            }}
          />{" "}
          <label className="uppercase text-neutral-400" htmlFor="email">
            Email Address
          </label>{" "}
          <input
            value={email}
            className="border border-neutral-400 p-3 rounded-2xl focus:outline-none focus:border-red-800"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="uppercase text-neutral-400" htmlFor="message">
            Your Message{" "}
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="border border-neutral-400 p-3 rounded-2xl resize-none min-h-36 focus:outline-none focus:border-red-800"
            name="message"
            id="message"
            placeholder="Tell us about your project..."
          ></textarea>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {successMsg && (
            <p role="status" className="text-green-400 text-sm">
              {successMsg}
            </p>
          )}
          <button
            type="submit"
            className="w-full uppercase bg-red-900 mt-3 rounded-2xl p-3 font-bold cursor-pointer"
            disabled={loading}
          >
            {loading ? "SENDING..." : "SEND MESSAGE ↗"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
