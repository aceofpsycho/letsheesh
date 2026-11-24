# Graph Report - Impeccable  (2026-11-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 732 nodes · 2334 edges · 27 communities (24 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 83 edges (avg confidence: 0.85)
- Token cost: 18,070 input · 224 output

## Community Hubs (Navigation)
- Session Lifecycle Management
- Configure Bar Builders
- Agent Focus and Queues
- Screenshot Utilities
- Annotation and Pin Tools
- Live Configuration Controls
- Placeholder State Management
- Manual Edit System
- Manual Editing Text Handling
- Svelte Component Mounting
- Live Browser DOM Helpers
- Design System Components
- Shader Capture Tools
- Insert Placeholder Sizing
- Live Browser Session Storage
- Svelte Prop Value Extraction
- Edit Badge Proxies
- Design Panel System
- Detect Script Ignores
- Color and Typography Models
- Document Reference Utilities
- CSS Selector Tools
- Selection Highlighting
- Font Collection Utilities
- Order Module Functions

## God Nodes (most connected - your core abstractions)
1. `connectSSE()` - 38 edges
2. `setLiveState()` - 34 edges
3. `resumeSession()` - 33 edges
4. `showToast()` - 33 edges
5. `initGlobalBar()` - 30 edges
6. `el()` - 29 edges
7. `buildInsertConfigureRow()` - 28 edges
8. `handleKeyDown()` - 28 edges
9. `cleanup()` - 27 edges
10. `injectSvelteComponentsFromManifest()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `removalOriginalText()` --indirect_call--> `own()`  [INFERRED]
  .claude/skills/impeccable/scripts/live-browser.js → .claude/skills/impeccable/scripts/live-browser-dom.js
- `init()` --indirect_call--> `stopFocusOutIntoChrome()`  [INFERRED]
  .claude/skills/impeccable/scripts/live-browser.js → .claude/skills/impeccable/scripts/live-browser-dom.js
- `teardown()` --indirect_call--> `stopFocusOutIntoChrome()`  [INFERRED]
  .claude/skills/impeccable/scripts/live-browser.js → .claude/skills/impeccable/scripts/live-browser-dom.js
- `enableInlineEdit()` --indirect_call--> `own()`  [INFERRED]
  .claude/skills/impeccable/scripts/live-browser.js → .claude/skills/impeccable/scripts/live-browser-dom.js
- `layoutFlowChildren()` --indirect_call--> `pickable()`  [INFERRED]
  .claude/skills/impeccable/scripts/live-browser.js → .claude/skills/impeccable/scripts/live-browser-dom.js

## Import Cycles
- None detected.

## Communities (27 total, 3 thin omitted)

### Community 0 - "Session Lifecycle Management"
Cohesion: 0.06
Nodes (96): abandonForeignSession(), abandonSupersededGo(), abortSvelteComponentInjection(), applyLiveBarPreference(), applySavedSessionMeta(), clampVariantIndex(), cleanup(), clearHandled() (+88 more)

### Community 1 - "Configure Bar Builders"
Cohesion: 0.06
Nodes (68): actionLabel(), agentStatusText(), applyConfigureBarChrome(), barPaletteForTheme(), bindConfigureInlineControlHover(), bindConfigureModifierPillHover(), buildConfigureActionControl(), buildConfigureCountControl() (+60 more)

### Community 2 - "Agent Focus and Queues"
Cohesion: 0.07
Nodes (58): agentHasWorkInFlight(), armPageChatForTyping(), attachSteerFocusDebug(), attachSteerFocusGuard(), buildSteerProcessingDots(), buildSteerQueueHint(), clearSteerAwaitTimer(), clearSteerFocusRecoverTimer() (+50 more)

### Community 3 - "Screenshot Utilities"
Cohesion: 0.09
Nodes (53): ae(), be(), bt(), Ce(), Ct(), de(), dt(), _e() (+45 more)

### Community 4 - "Annotation and Pin Tools"
Cohesion: 0.08
Nodes (46): actOnAgentTarget(), agentTargetBusyReason(), agentTargetOverlayGone(), agentTargetTaken(), applyPlaceholderDimensions(), beginEditPin(), buildAnnotationsForCapture(), buildInsertPlaceholderSnapshotFromDom() (+38 more)

### Community 5 - "Live Configuration Controls"
Cohesion: 0.11
Nodes (45): beginNewLiveConfiguration(), bindConfigureCountPillTooltip(), buildSelectionPill(), cancelEditing(), cancelEditingToPicking(), cancelInsertConfigure(), cleanupAcceptedSession(), clearAnnotations() (+37 more)

### Community 6 - "Placeholder State Management"
Cohesion: 0.07
Nodes (39): applyGlobalBarLabelState(), applyParamDefaults(), applyParamValue(), applySavedParamValues(), buildPlaceholderResizeHandles(), checkpointPayload(), clampPlaceholderSize(), copyToClipboard() (+31 more)

### Community 7 - "Manual Edit System"
Cohesion: 0.10
Nodes (41): brandMarkSvg(), clearStoredManualApplyState(), fetchAgentPollingStatus(), fetchPendingCount(), handleManualEditActivity(), hideAgentPollTooltip(), hidePendingApplyDock(), initGlobalBar() (+33 more)

### Community 8 - "Manual Editing Text Handling"
Cohesion: 0.08
Nodes (39): addManualContextText(), applyEditing(), buildLocatorForLeaf(), canRestoreManualEditElement(), collectEditableTextRows(), visit(), collectManualContextPieces(), walk() (+31 more)

### Community 9 - "Svelte Component Mounting"
Cohesion: 0.12
Nodes (27): acceptedDomAlreadyClean(), applyOriginalAttrsToSvelteAnchor(), clearHandledWrapperReloadStamp(), commitAcceptedSvelteComponentToDom(), commitAcceptedVariantToDom(), componentModuleCandidates(), deferredRecoverySuperseded(), describeMountFailure() (+19 more)

### Community 10 - "Live Browser DOM Helpers"
Cohesion: 0.11
Nodes (22): createLiveBrowserDomHelpers(), activeElementDeep(), cloneWithoutChrome(), copyTextViaSelection(), cssId(), liveUiRoot(), makeFrozenAnchor(), own() (+14 more)

### Community 11 - "Design System Components"
Cohesion: 0.11
Nodes (26): buildCollapsible(), buildListHtml(), buildRadiiModels(), designEmptyMessage(), escapeHtml(), fontStack(), groupByKind(), highlightBold() (+18 more)

### Community 12 - "Shader Capture Tools"
Cohesion: 0.12
Nodes (20): averageRgb01(), captureChromeNodes(), captureElementFromRenderedAncestor(), captureElementToBlob(), compileShader(), cssColorToRgb01(), dominantRgb01(), findBackdropAncestor() (+12 more)

### Community 13 - "Insert Placeholder Sizing"
Cohesion: 0.10
Nodes (20): applyPlaceholderSizingStyles(), computeInsertPosition(), createInsertPlaceholder(), cursorForInsertAxis(), detectInsertAxis(), detectInsertAxisFromStyle(), ensureInsertLine(), groupSiblingRows() (+12 more)

### Community 14 - "Live Browser Session Storage"
Cohesion: 0.19
Nodes (17): createLiveBrowserSessionState(), clearHandled(), clearScrollY(), clearSession(), isHandled(), loadSession(), markHandled(), nextCheckpointRevision() (+9 more)

### Community 15 - "Svelte Prop Value Extraction"
Cohesion: 0.16
Nodes (19): buildSvelteExpressionTextMap(), buildSveltePropValuesFromLiveElement(), buildSveltePropValuesV2(), cloneWithoutElements(), collectTextNodes(), collectVisibleTexts(), cssEscapeIdent(), elementMatchesOriginalMarkup() (+11 more)

### Community 17 - "Edit Badge Proxies"
Cohesion: 0.27
Nodes (10): bindEditBadgeProxy(), editBadgeProxyTargets(), initEditBadge(), initEditBadgeHitProxies(), positionEditBadge(), proxyMouseEvent(), setImportantStyle(), styleEditBadgeProxy() (+2 more)

### Community 18 - "Design Panel System"
Cohesion: 0.39
Nodes (8): buildDesignHeader(), designPanelCss(), fetchDesignSystem(), initDesignPanel(), loadDesignPrefs(), renderDesignChrome(), saveDesignPrefs(), toggleDesignPanel()

### Community 19 - "Detect Script Ignores"
Cohesion: 0.52
Nodes (6): globToRegex(), matchesScope(), normalizeIgnoreRule(), normalizeIgnoreValue(), pageCandidates(), resolveDetectIgnores()

### Community 20 - "Color and Typography Models"
Cohesion: 0.33
Nodes (6): buildColorModels(), buildTypographyModels(), findProseDescription(), humanizeKey(), normalizeCssColor(), splitFontFamily()

### Community 21 - "Document Reference Utilities"
Cohesion: 0.40
Nodes (6): documentRefClassSuffix(), documentRefIdSuffix(), documentRefSegment(), elementMatchesManualRefSegment(), indexAmongSameTag(), normalizeDocumentRefToken()

### Community 22 - "CSS Selector Tools"
Cohesion: 0.33
Nodes (6): findMatchingCssBrace(), prefixCssSelectors(), scopeCssBlock(), shouldScopeNestedCssAtRule(), splitCssSelectorList(), unwrapSvelteGlobalSelector()

### Community 23 - "Selection Highlighting"
Cohesion: 0.53
Nodes (5): clearHighlight(), highlight(), runSequence(), updateSelection(), updateTotal()

### Community 24 - "Font Collection Utilities"
Cohesion: 0.40
Nodes (5): absolutizeUrls(), bufferToBase64(), collectFontCssText(), collectFontFaces(), inlineFontUrls()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `stopFocusOutIntoChrome()` connect `Live Browser DOM Helpers` to `Agent Focus and Queues`, `Manual Edit System`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 9 inferred relationships involving `initGlobalBar()` (e.g. with `hideAgentPollTooltip()` and `onDetectMessage()`) actually correct?**
  _`initGlobalBar()` has 9 INFERRED edges - model-reasoned connections that need verification._
- **Should `Session Lifecycle Management` be split into smaller, more focused modules?**
  _Cohesion score 0.059922680412371136 - nodes in this community are weakly interconnected._
- **Why does `own()` connect `Live Browser DOM Helpers` to `Manual Editing Text Handling`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `Configure Bar Builders` be split into smaller, more focused modules?**
  _Cohesion score 0.05711849957374254 - nodes in this community are weakly interconnected._
- **Should `Agent Focus and Queues` be split into smaller, more focused modules?**
  _Cohesion score 0.07441016333938294 - nodes in this community are weakly interconnected._
- **Should `Screenshot Utilities` be split into smaller, more focused modules?**
  _Cohesion score 0.08583959899749373 - nodes in this community are weakly interconnected._