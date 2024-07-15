import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesMap: Map<number, Category> = new Map<number, Category>();
  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$: Observable<Category[]> = this.categoriesSubject.asObservable();

  constructor() {
    this.loadCategoriesFromLocalStorage();
  }

  private loadCategoriesFromLocalStorage(): void {
    const categories = this.getCategoriesFromLocalStorage();
    categories.forEach(category => this.categoriesMap.set(category.id, category));
    this.categoriesSubject.next(Array.from(this.categoriesMap.values()));
  }

  private getCategoriesFromLocalStorage(): Category[] {
    return JSON.parse(localStorage.getItem('categories') || '[]');
  }

  private saveCategoriesToLocalStorage(): void {
    const categories = Array.from(this.categoriesMap.values());
    localStorage.setItem('categories', JSON.stringify(categories));
  }

  getCategories(): Observable<Category[]> {
    return this.categories$;
  }

  addCategory(category: Category): void {
    this.categoriesMap.set(category.id, category);
    this.saveCategoriesToLocalStorage();
    this.categoriesSubject.next(Array.from(this.categoriesMap.values()));
  }

  removeCategory(categoryId: number): void {
    if (this.categoriesMap.delete(categoryId)) {
      this.saveCategoriesToLocalStorage();
      this.categoriesSubject.next(Array.from(this.categoriesMap.values()));
    }
  }

  categoryExists(name: string): boolean {
    for (let category of this.categoriesMap.values()) {
      if (category.name.toLowerCase() === name.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
}

export interface Category {
  id: number;
  name: string;
}
