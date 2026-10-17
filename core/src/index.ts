// Every feature is published as its own secondary entry point (e.g. `@garudalinux/core/charts`)
// so apps only download what they render and can lazy load heavy parts such as charts or the
// log viewer. This barrel re-exports all of them for backwards compatibility.
export * from '@garudalinux/core/card';
export * from '@garudalinux/core/shell';
export * from '@garudalinux/core/message-toast';
export * from '@garudalinux/core/config';
export * from '@garudalinux/core/feature-detail';
export * from '@garudalinux/core/news';
export * from '@garudalinux/core/models';
export * from '@garudalinux/core/services';
export * from '@garudalinux/core/footer';
export * from '@garudalinux/core/search';
export * from '@garudalinux/core/jokes';
export * from '@garudalinux/core/charts';
export * from '@garudalinux/core/document-section';
export * from '@garudalinux/core/formatting';
export * from '@garudalinux/core/loading';
export * from '@garudalinux/core/log-viewer';
export * from '@garudalinux/core/not-found';
export * from '@garudalinux/core/table-pagination';
export * from '@garudalinux/core/title';
export * from '@garudalinux/core/utils';
