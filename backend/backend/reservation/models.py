from django.db import models


class Train(models.Model):
    train_number = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    total_seats = models.IntegerField()

    def __str__(self):
        return f'{self.train_number} - {self.name}'


