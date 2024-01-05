import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const text = await Clipboard.readText()
  const filteredText = text?.split(',').join('')
  if (filteredText) {
    await Clipboard.paste(filteredText)
  }
  await showHUD("filter out comma!");
}
