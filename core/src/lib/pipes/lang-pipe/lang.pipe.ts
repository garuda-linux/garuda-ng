import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langPipe',
})
export class LangPipe implements PipeTransform {
  /**
   * Transform a language code into its corresponding language name with flag emoji.
   * If the language code is not recognized, it returns the original value.
   * @param value The language code to be transformed.
   * @returns The corresponding language name with flag emoji, or the original value if not recognized.
   */
  transform(value: string): string {
    switch (value) {
      case 'en':
        return 'English 🇬🇧/🇺🇸';
      case 'es':
        return 'Spanish 🇪🇸';
      case 'fr':
        return 'French 🇫🇷';
      case 'de':
        return 'German 🇩🇪';
      case 'it':
        return 'Italian 🇮🇹';
      case 'nl':
        return 'Dutch 🇳🇱';
      case 'pl':
        return 'Polish 🇵🇱';
      case 'pt':
        return 'Portuguese 🇵🇹';
      case 'pt-BR':
        return 'Portuguese (Brazil) 🇧🇷';
      case 'ru':
        return 'Russian 🇷🇺';
      case 'tr':
        return 'Turkish 🇹🇷';
      case 'zh-CN':
        return 'Chinese 🇨🇳';
      case 'ja':
        return 'Japanese 🇯🇵';
      case 'ko':
        return 'Korean 🇰🇷';
      case 'id':
        return 'Indonesian 🇮🇩';
      case 'ar':
        return 'Arabic 🇸🇦';
      case 'am':
        return 'Amharic 🇪🇹';
      case 'eu':
        return 'Basque 🇪🇸';
      case 'hi':
        return 'Hindi 🇮🇳';
      case 'gl':
        return 'Galician 🇪🇸';
      case 'sv':
        return 'Swedish 🇸🇪';
      case 'sl':
        return 'Slovenian 🇸🇮';
      case 'sw':
        return 'Swahili 🇰🇪';
      case 'hu':
        return 'Hungarian 🇭🇺';
      case 'ua':
        return 'Ukrainian 🇺🇦';
      case 'ua-2':
        return 'Fine Ukrainian 🇺🇦';
      case 'uz':
        return 'Uzbek 🇺🇿';
      default:
        return value;
    }
  }
}
