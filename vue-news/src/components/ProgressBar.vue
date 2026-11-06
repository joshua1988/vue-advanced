<template>
  <div>
    <div class="container" v-if="loading">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
    </div>
    <div class="filler" v-if="!loading"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
    },
  }
}
</script>

<style scoped>
.filler {
  margin-bottom: -2px;
  height: 2px;
  background-color: #3eaf7c;
}
.container {
  margin-bottom: -2px;
  height: 2px;
  background-color: #3eaf7c;
  animation: start .3s ease-in;
  position: relative;
}

@keyframes start {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 20px;
    opacity: 0;
  }
}

.bar {
  width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  transition: transform .2s linear;
}

.bar1 {
  animation: growBar1 2.5s infinite, moveBar1 2.5s infinite;
}

.bar2 {
  animation: growBar2 2.5s infinite, moveBar2 2.5s infinite;
}

@keyframes growBar1 {
  0% {
    animation-timing-function: linear;
    transform: scaleX(.1);
  }
  36.6% {
    animation-timing-function: cubic-bezier(.33473,.12482,.78584,1);
    transform: scaleX(.1);
  }
  69.15% {
    animation-timing-function: cubic-bezier(.22573,0,.23365,1.37098);
    transform: scaleX(.83);
  }
  100% {
    transform: scaleX(.1);
  }
}

@keyframes moveBar1 {
  0% {
    left: -105.16667%;
    animation-timing-function: linear;
  }
  20% {
    left: -105.16667%;
    animation-timing-function: cubic-bezier(.5,0,.70173,.49582);
  }
  69.15% {
    left: 21.5%;
    animation-timing-function: cubic-bezier(.30244,.38135,.55,.95635);
  }
  100% {
    left: 95.44444%;
  }
}

@keyframes growBar2 {
  0% {
    animation-timing-function: cubic-bezier(.20503,.05705,.57661,.45397);
    transform: scaleX(.1);
  }
  19.15% {
    animation-timing-function: cubic-bezier(.15231,.19643,.64837,1.00432);
    transform: scaleX(.57);
  }
  44.15% {
    animation-timing-function: cubic-bezier(.25776,-.00316,.21176,1.38179);
    transform: scaleX(.91);
  }
  100% {
    transform: scaleX(.1);
  }
}
       
@keyframes moveBar2 {
  0% {
    left: -54.88889%;
    animation-timing-function: cubic-bezier(.15,0,.51506,.40968);
  }     
  25% {
    left: -17.25%;
    animation-timing-function: cubic-bezier(.31033,.28406,.8,.73372);
  }     
  48.35% {
    left: 29.5%;
    animation-timing-function: cubic-bezier(.4,.62703,.6,.90203);
  } 
  100% {
    left: 117.38889%;
  }
}
</style>
