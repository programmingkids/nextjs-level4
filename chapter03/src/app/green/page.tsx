export default function Page() {
  console.log("This is green page");
  return (
    <div className="main">
      <h1 className="p-4 bg-green-200 text-xl">Green</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{"green, ".repeat(20)}</div>
        <div>
          {new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" })}
        </div>
      </div>
    </div>
  );
}
