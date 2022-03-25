<script lang="ts">
  export let address: string;
  export let contactEmail: string;
  export let subtitle: string;
  export let imageUrl: string;
  export let description: string;
  export let title: string;
</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }
</style>

<article>
  <header>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <h3>{address}</h3>
  </header>
  <div class="image">
    <img src={imageUrl} alt="image" />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <a href="mailto:{contactEmail}"></a>
    <button>Show Details</button>
    <button>Favorite</button>
  </footer>
</article>
