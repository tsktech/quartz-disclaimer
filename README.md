# quartz-disclaimer

A Quartz v5 component plugin that adds a disclaimer banner to every page.

## Install

```bash
npx quartz plugin add github:tsktech/quartz-disclaimer
```

## Configure

```yaml
plugins:
  - source: github:tsktech/quartz-disclaimer
    enabled: true
    options:
      text: "Your custom disclaimer text here"
    layout:
      position: afterBody
      priority: 5
```

If no `text` option is provided, a sensible default is used.
