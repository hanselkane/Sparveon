from rest_framework import serializers
from memberapp.models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields='__all__'