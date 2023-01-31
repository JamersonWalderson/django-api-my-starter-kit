from django.db import models


class Service(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Nome")
    price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True, verbose_name="Preço"
    )
    description = models.CharField(
        max_length=255, blank=True, null=True, verbose_name="Descrição"
    )

    def __str__(self):
        return str(self.name)
