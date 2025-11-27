# Design Guidelines: Classic Romantic Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from classic romantic aesthetics found in wedding invitation websites, romantic greeting cards, and elegant dating platforms. The design should evoke timeless romance through refined typography, generous whitespace, and delicate details.

**Core Principles:**
- Elegance through simplicity and restraint
- Playful interactivity that feels charming, not gimmicky
- Emotional warmth balanced with clean, readable layouts
- Timeless aesthetic that avoids trendy treatments

## Typography

**Font Families:**
- Primary (Headings): "Playfair Display" (serif) - elegant, romantic, traditional
- Secondary (Body): "Lora" (serif) - readable, warm, complements Playfair
- Accent (Special moments): "Great Vibes" or "Dancing Script" (script) - use sparingly for decorative elements

**Hierarchy:**
- Entrance Question: text-5xl to text-6xl (Playfair Display, font-bold)
- Message Board Title: text-4xl (Playfair Display)
- Individual Messages: text-lg (Lora)
- Buttons: text-base to text-lg (Lora, font-medium)
- Timestamps/Meta: text-sm (Lora, reduced opacity)

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, and 16 for consistent rhythm
- Component padding: p-8, p-12
- Section spacing: py-12, py-16
- Element gaps: gap-4, gap-8
- Card spacing: space-y-6

**Container Strategy:**
- Entrance Gate: Full viewport (min-h-screen), centered content with max-w-2xl
- Message Board: max-w-4xl container, centered
- Individual message cards: Full width within container

## Core Components

### Entrance Gate Screen
**Layout:**
- Full-screen centered layout (min-h-screen, flex items-center justify-center)
- Vertical stack with generous spacing (space-y-12)
- Question text centered, with decorative hearts (using HTML entities or icon fonts)
- Button pair positioned below with strategic spacing (gap-6, flex justify-center)

**Interactive Elements:**
- "Yes" button: Prominent, stable position, larger size (px-12 py-4)
- "No" button: Starts aligned with "Yes", programmatically moves away from cursor/touch using JavaScript position manipulation (absolute positioning)
- Subtle romantic decorations: Hearts, floral motifs positioned at corners using Font Awesome or Heroicons

**Interaction Behavior:**
- "No" button should smoothly transition positions (transition-all duration-300)
- Maximum 3-4 evasive movements before staying in far corner
- "Yes" button triggers fade transition to main content

### Message Board (Main Content)

**Header Section:**
- Centered romantic greeting/title (text-4xl, mb-12)
- Decorative divider or heart icon
- Post message form prominently featured

**Post Message Form:**
- Single-column centered card (max-w-2xl, p-8)
- Name input field (optional but encouraged)
- Message textarea (min-h-32, rounded corners)
- Character limit indicator (text-sm, 500 characters max)
- Submit button (elegant, centered or right-aligned)
- Form card elevated slightly (shadow-lg)

**Messages Display:**
- Vertical stack of message cards (space-y-6)
- Each card: Individual message container (p-6, rounded-lg, shadow-md)
- Message layout:
  - Author name (text-lg, font-semibold, mb-2)
  - Message content (text-base, leading-relaxed, mb-4)
  - Bottom row: Timestamp (left, text-sm) + Delete button (right, text-sm)
- Empty state: Centered message encouraging first post with romantic icon

**Message Card Structure:**
```
[Card Container - rounded, shadow]
  [Author Name]
  [Message Text - generous line height]
  [Footer Row]
    [Timestamp] ................ [Delete Button]
```

### Buttons
- Primary (Yes, Submit): Larger padding (px-8 py-3), rounded-full, font-medium
- Secondary (No - initial): Same as primary until evasion
- Destructive (Delete): Smaller (px-4 py-2), rounded-md, subtle styling
- All buttons: Smooth hover transitions (transition-colors duration-200)

## Images

**Hero Background (Entrance Gate):**
- Soft, romantic background image: Rose petals, sunset sky gradient, or soft bokeh lights
- Full viewport coverage with subtle overlay for text readability
- Image should be high-quality, dreamy, and non-distracting
- Position: Cover entire entrance screen with background-size: cover
- Treatment: Subtle blur or low opacity overlay to ensure text legibility

**Decorative Elements:**
- Heart icons scattered sparingly around entrance question (Font Awesome icons)
- Small floral icon or heart as section divider in message board
- No additional photography needed for message board - keep focus on user content

## Animations & Interactions

**Minimal Approach:**
- Entrance transition: Simple fade-in when "Yes" is clicked (opacity transition)
- "No" button movement: Smooth position changes only (transform translate)
- Form submission: Brief success indicator (checkmark fade-in, then new message appears)
- Message deletion: Quick fade-out removal
- Avoid: Parallax, complex scroll animations, particle effects

## Accessibility

- All interactive elements keyboard accessible (tab navigation)
- Focus states clearly visible on buttons and form inputs
- "No" button must be clickable on mobile tap (not just hover evasion)
- Form labels properly associated with inputs
- Sufficient contrast maintained despite romantic theme
- Message timestamps in human-readable format

## Mobile Responsiveness

- Entrance question: Scale down to text-3xl on mobile
- Buttons stack vertically on small screens if needed (flex-col sm:flex-row)
- Message cards: Full width with reduced padding (p-4) on mobile
- Form inputs: Full width on all viewports
- "No" button evasion: Works with touch events, respects mobile viewport boundaries