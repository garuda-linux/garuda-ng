import { Pipe, PipeTransform } from '@angular/core';
import { EmojiConvertor } from 'emoji-js';

@Pipe({
  name: 'emojiPipe',
  standalone: true,
})
export class EmojiPipe implements PipeTransform {
  /**
   * Transform colon-based emoji codes in a string to their corresponding Unicode emojis.
   * If the input value is undefined or empty, it returns an empty string.
   * @param value The input string containing colon-based emoji codes.
   * @returns The transformed string with Unicode emojis.
   */
  transform(value: string | undefined): string {
    if (!value) return '';

    const emoji = new EmojiConvertor();
    emoji.replace_mode = 'unified';
    emoji.allow_native = true;

    return emoji.replace_colons(value);
  }
}
