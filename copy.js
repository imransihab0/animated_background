function copyText(textAreaId) {
  const textarea = document.getElementById(textAreaId);
  textarea.select();
  document.execCommand('copy');
  Swal.fire({
  title: "Copied!",
  text: "Text copied to clipboard.",
  icon: "success"
});
}
