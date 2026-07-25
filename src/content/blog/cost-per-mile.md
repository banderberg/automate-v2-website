---
title: "How to Calculate Your Car's True Cost Per Mile"
description: "The real formula for cost per mile — fuel, maintenance, insurance, and depreciation — plus a free calculator you can use right now."
pubDate: 2026-07-25
---

Most drivers can tell you what they paid for gas last week. Almost none can tell you what their car costs them **per mile**. That number is more useful than almost any other figure in your budget — it's what actually lets you compare a commute, a road trip, or even one car against another.

## The formula

Cost per mile is simple in structure, even though the inputs take some digging:

```
Cost per mile = Total car costs ÷ Total miles driven
```

The part that trips people up is "total car costs." Most people only count fuel. A true figure includes:

- **Fuel** — every fill-up over the period
- **Maintenance & repairs** — oil changes, tires, brakes, everything
- **Insurance** — your premium, prorated to the period
- **Registration & fees** — annual or biannual, prorated
- **Parking & tolls** — easy to forget, adds up fast
- **Depreciation** *(optional, for a full ownership-cost picture)* — what the car lost in value over the period

Fuel and maintenance alone will still undercount your real cost — but they're the number most people actually want day to day, and it's the number a fill-up-and-go tracker like AutoMate calculates automatically as you log events.

## Try it

<div class="cpm-calculator" data-cpm-calculator>
  <div class="cpm-field">
    <label for="cpm-cost">Total costs over the period ($)</label>
    <input id="cpm-cost" type="number" inputmode="decimal" min="0" step="1" placeholder="e.g. 2400" />
  </div>
  <div class="cpm-field">
    <label for="cpm-miles">Miles driven over the same period</label>
    <input id="cpm-miles" type="number" inputmode="decimal" min="0" step="1" placeholder="e.g. 12000" />
  </div>
  <div class="cpm-result">
    <span class="cpm-result-label">Cost per mile</span>
    <span class="cpm-result-value" data-cpm-output>$0.00</span>
  </div>
</div>

<style>
  .cpm-calculator {
    display: grid;
    gap: 1rem;
    background: var(--card);
    border: 1px solid var(--divider);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    margin: 1.5rem 0 2rem;
  }
  .cpm-field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .cpm-field label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ink);
  }
  .cpm-field input {
    font-family: var(--font-body);
    font-size: 1rem;
    padding: 0.65rem 0.75rem;
    border: 1px solid var(--divider);
    border-radius: var(--radius-md);
    background: var(--surface);
    color: var(--ink);
  }
  .cpm-field input:focus {
    outline: 2px solid var(--primary);
    outline-offset: 1px;
  }
  .cpm-result {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    background: var(--primary-light);
    border-radius: var(--radius-md);
    padding: 1rem 1.25rem;
  }
  .cpm-result-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary);
  }
  .cpm-result-value {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--primary);
    font-variant-numeric: tabular-nums;
  }
</style>

<script>
  (function () {
    const root = document.querySelector('[data-cpm-calculator]');
    if (!root) return;
    const costInput = root.querySelector('#cpm-cost');
    const milesInput = root.querySelector('#cpm-miles');
    const output = root.querySelector('[data-cpm-output]');

    function update() {
      const cost = parseFloat(costInput.value) || 0;
      const miles = parseFloat(milesInput.value) || 0;
      const perMile = miles > 0 ? cost / miles : 0;
      output.textContent = `$${perMile.toFixed(2)}`;
    }

    costInput.addEventListener('input', update);
    milesInput.addEventListener('input', update);
  })();
</script>

## Why fuel-only estimates lie to you

A car that gets great gas mileage can still be expensive to own if it's in the shop often. A car with a cheap purchase price can cost more per mile than a pricier one if its insurance or repair costs run high. Cost per mile is the number that cuts through all of that — it doesn't care why the money left, only that it did.

## How to actually track it

The honest answer is that nobody calculates this by hand more than once. The friction of digging through receipts is exactly why most people only ever estimate. Apps built for this — [AutoMate](../../) logs fuel, service, and expenses as they happen and keeps a running cost-per-mile figure automatically, using your real odometer readings instead of a period estimate.

If you'd rather do it manually once a year: pull your total spend from bank statements and receipts, pull your odometer reading from a year ago and today, and divide. It's rough, but it's real — and it's a lot better than not knowing at all.
