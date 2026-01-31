export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#101210",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="loading-spinner h-6 w-6 rounded-full border-2 border-white/30 border-t-white" />
    </div>
  );
}
