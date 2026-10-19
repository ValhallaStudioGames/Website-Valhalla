<script setup>
import PageHeader from '../components/PageHeader.vue'

// Placeholder-principes: vervang door de echte missie van de studio.
const principles = [
  { title: 'Passie', text: 'Elke game begint met een idee waar we echt in geloven.' },
  { title: 'Samenwerken', text: 'Een sterk team bouwt sterkere werelden.' },
  { title: 'Kwaliteit', text: 'We polijsten tot elk detail klopt.' },
]
</script>

<template>
  <PageHeader title="Our Mission" subtitle="Waar Valhalla Games voor staat." />

  <section class="section">
    <div class="container">
      <p class="statement">
        Onze missie: games maken die spelers meenemen naar werelden vol <em>strijd</em> en <em>avontuur</em>.
      </p>
      <p class="muted mt-4" style="max-width: 40rem">
        Vul hier de echte missietekst in.
      </p>
    </div>
  </section>

  <section class="section pt-0">
    <div class="container">
      <div class="section-head"><h2>Waar we voor gaan</h2></div>
      <div class="row g-4">
        <div v-for="(p, i) in principles" :key="p.title" class="col-md-4">
          <div class="num-col">
            <span class="idx">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
