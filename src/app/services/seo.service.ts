import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  environment={
baseUrl:'https://shadabiqubal.vercel.app/'
  }

  private siteName = 'Full Stack Web Developer';

  constructor(private meta: Meta, private title: Title) { }

  setSeoData(
    title: string,
    description: string,
    keywords: string[] = [],
    imageUrl: string = this.environment.baseUrl + 'assets/images/seo-default.jpg'
  ): void {
    this.title.setTitle(`${title} | ${this.siteName}`);
    
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords.join(', ') });
    
    // Open Graph / Facebook
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: this.environment.baseUrl });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    
    // Twitter
    this.meta.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ property: 'twitter:url', content: this.environment.baseUrl });
    this.meta.updateTag({ property: 'twitter:title', content: title });
    this.meta.updateTag({ property: 'twitter:description', content: description });
    this.meta.updateTag({ property: 'twitter:image', content: imageUrl });
  }
}
