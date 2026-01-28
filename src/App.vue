<template>
  <router-view />
</template>
<style>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');


.section {
  max-width: 900px;        
  margin: 4rem auto;       
  padding: 0 1.5rem;       
  line-height: 1.7;        
  font-family: 'Inter', sans-serif; 
  color: #4e4b4b;          
}


.section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #50c9bf, #FFD700); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logo {
  width: 30px;
  height: 50px;
}
.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: #FFD700;
  border-bottom: 1px 2px#FFD700;
  cursor: pointer;
}

.section p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  white-space: pre-line; 
}


@media (max-width: 768px) {
  .section {
    margin: 3rem 1rem;
  }
  .section h2 {
    font-size: 1.5rem;
  }
  .section p {
    font-size: 0.95rem;
  }
}

</style>