import { Button } from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-dvh p-8">
      <h1 className="type-h1 text-tangerine mb-4">Heading 1</h1>
      <h2 className="type-h2 text-warning mb-8">Heading 2</h2>

      <div className="mb-12 bg-plum px-8">
        <Button variant={"link"}>See how it works</Button>
      </div>
    </div>
  );
}
