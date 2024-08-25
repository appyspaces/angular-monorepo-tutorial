

```
npx create-nx-workspace@19.1.2 angular-monorepo-tutorial --preset=angular-monorepo
```

```
npx nx g @nx/angular:application inventory --directory=apps/inventory
```

```
npx nx g @nx/angular:library products --directory=libs/products --standalone
```

```
npx nx g @nx/angular:library orders --directory=libs/orders --standalone
```

```
npx nx g @nx/angular:library shared-ui --directory=libs/shared/ui --standalone
```

```
```