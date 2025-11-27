import PostMessageForm from "../PostMessageForm";

export default function PostMessageFormExample() {
  return (
    <div className="p-8 max-w-2xl">
      <PostMessageForm
        onSubmit={(data) => console.log("Form submitted:", data)}
        isPending={false}
      />
    </div>
  );
}
