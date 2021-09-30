"""Added cluster to units

Revision ID: 570928209587
Revises: 6292eaf8d7a1
Create Date: 2021-10-01 00:33:52.019175

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '570928209587'
down_revision = '6292eaf8d7a1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('units', sa.Column('dom_clust', sa.Integer(), nullable=True))
    op.add_column('units', sa.Column('foe', sa.Integer(), nullable=True))
    op.add_column('units', sa.Column('int_clust', sa.Integer(), nullable=True))
    op.add_column('units', sa.Column('non_clust', sa.Integer(), nullable=True))
    op.drop_column('units', 'unit_fee')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('units', sa.Column('unit_fee', sa.FLOAT(), nullable=True))
    op.drop_column('units', 'non_clust')
    op.drop_column('units', 'int_clust')
    op.drop_column('units', 'foe')
    op.drop_column('units', 'dom_clust')
    # ### end Alembic commands ###
