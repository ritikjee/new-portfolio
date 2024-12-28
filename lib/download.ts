export async function downloadFile(
  fileUrl: string,
  fileName: string,
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (setIsLoading) {
    setIsLoading(true);
  }
  const res = await fetch(fileUrl);
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  if (setIsLoading) {
    setIsLoading(false);
  }
}
