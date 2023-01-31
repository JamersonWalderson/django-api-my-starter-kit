# django-api-my-starter-kit
# Starter kit para projetos Django
Repositório template para projetos com API em Django.

## Como instalar
```
- $ git clone https://github.com/JamersonWalderson/django-api-my-starter-kit.git
- $ python -m venv .venv
- $ source .venv/bin/activate
- $ pip install -r requirements.txt
- $ python manage.py makemigrations
- $ python manage.py migrate
- $ python manage.py createsuperuser 
```

## Padronização para identificação de commits
- doc: Apenas para mudança de documentações.
- feat: Para novas funcionalidades.
- fix: Para correção de bugs.
- perf: Mudança de código para melhoria de performance
- refactor: Mudança de código que não adiciona uma funcionalidade e também
não soluciona um bug.
- style: mudanças no código que não afetam seu significado (espaço em branco,
formatação, ponto e vírgula, etc)
- chore: pequena modificação, que não é um feat ou fix, e é maior que um style.
- test: adicionar ou corrigir testes.
- revert: caso precise reverter uma modificação aplicada.
- lib: Adição/remoção de bibliotecas.